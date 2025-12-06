import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Article as ArticleIcon, 
  Event as EventIcon, 
  Description as DescriptionIcon,
  Person as PersonIcon
} from '@mui/icons-material';

import PageInfo from '../../components/PageInfo';

const resources = [
  {
    title: 'Blogs',
    description: 'Read our latest articles on tax tips, financial planning, and business advice.',
    icon: <ArticleIcon color="primary" fontSize="large" />,
    path: '/resources/blogs'
  },
  {
    title: 'Tax Calendar',
    description: 'Important tax deadlines and filing dates for the current year.',
    icon: <EventIcon color="primary" fontSize="large" />,
    path: '/resources/tax-calendar'
  },
  {
    title: 'Download Forms',
    description: 'Access commonly used tax and financial forms.',
    icon: <DescriptionIcon color="primary" fontSize="large" />,
    path: '/resources/download-forms'
  },
  {
    title: 'Client Portal',
    description: 'Secure access to your financial documents and information.',
    icon: <PersonIcon color="primary" fontSize="large" />,
    path: '/client-portal'
  }
];

const Resources = () => {
  return (
    <React.Fragment>
    <PageInfo
      title="Blog"
      subtitle="Latest updates and articles"
      // tagline="Stay informed, stay ahead."
      backgroundImage="/about-us.png"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog" }
      ]}
/>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Resources
      </Typography>
      {/* 
      <Typography variant="body1" paragraph sx={{ mb: 6 }}>
        Access our collection of resources to help you with your financial needs.
      </Typography>
      
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              component={Link} 
              to={resource.path}
              sx={{ 
                height: '100%',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}
            >
              <Box sx={{ mb: 2 }}>
                {resource.icon}
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {resource.title}
                </Typography>
                <Typography color="text.secondary">
                  {resource.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>Recent Updates</Typography>
        <List>
          {[
            'New tax regulations for 2023',
            'How to maximize your tax deductions',
            'Financial planning for small businesses'
          ].map((text, index) => (
            <ListItem key={index} component={Link} to="/resources/blogs" sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText 
                primary={text} 
                primaryTypographyProps={{ color: 'primary' }}
                sx={{ '&:hover': { textDecoration: 'underline' } }}
              />
            </ListItem>
          ))}
        </List>
      </Box> */}
    </Container>
    </React.Fragment>
  );
};

export default Resources;
