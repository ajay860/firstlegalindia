const express = require("express");
const cors = require("cors");

const adminRoutes = require("./routes/admin.routes")
const contactRoutes = require('./routes/contact.routes');
const serviceRoutes = require("./routes/service.routes");
const megaMenuRoutes = require("./routes/megaMenu.routes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./services/swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes)
app.use('/api/contact-us', contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/mega-menus", megaMenuRoutes);

if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
