import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { megaMenuAPI } from "../services/megaMenuAPI"

/* ---------- Async Thunk ---------- */
export const createMegaMenu = createAsyncThunk(
  "megaMenu/create",
  async (menuData, { rejectWithValue }) => {
    try {
      const response = await megaMenuAPI.createMegaMenu(menuData)
      return response
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to create mega menu"
      )
    }
  }
)

export const getMegaMenus = createAsyncThunk(
  "megaMenu/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await megaMenuAPI.getMegaMenus()
      return response
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch mega menus"
      )
    }
  }
)

export const getMegaMenuByKey = createAsyncThunk(
  "megaMenu/getByKey",
  async (menuKey, { rejectWithValue }) => {
    console.log("menuKey" ,menuKey)
    try {
      const response = await megaMenuAPI.getMegaMenuByKey(menuKey)
      return response
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch mega menu"
      )
    }
  }
)

export const deleteMegaMenu = createAsyncThunk(
  "megaMenu/delete",
  async (menuKey, { rejectWithValue }) => {
    try {
      await megaMenuAPI.deleteMegaMenu(menuKey)
      return menuKey
    } catch (error) {
      return rejectWithValue("Failed to delete mega menu")
    }
  }
)

export const updateMegaMenu = createAsyncThunk(
  "megaMenu/update",
  async ({ menuKey, payload }, { rejectWithValue }) => {
    console.log("menuKey, payload", menuKey, payload)
    try {
      const response = await megaMenuAPI.updateMegaMenu(menuKey, payload)
      return response
    } catch (error) {
      return rejectWithValue("Failed to update mega menu")
    }
  }
)

/* ---------- Slice ---------- */
const megaMenuSlice = createSlice({
  name: "megaMenu",
  initialState: {
    loading: false,
    success: false,
    error: null,
    list: [],
    selected: null, 
  },
  reducers: {
    resetMegaMenuState: (state) => {
      state.loading = false
      state.success = false
      state.error = null
      state.selected = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMegaMenu.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(createMegaMenu.fulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addCase(createMegaMenu.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getMegaMenus.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getMegaMenus.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload // ✅ store menus
      })
      .addCase(getMegaMenus.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteMegaMenu.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteMegaMenu.fulfilled, (state, action) => {
        state.loading = false
        state.list = state.list.filter(
          (menu) => menu.menu_key !== action.payload
        )
      })
      .addCase(deleteMegaMenu.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(updateMegaMenu.pending, (state) => {
        state.loading = true
      })
      .addCase(updateMegaMenu.fulfilled, (state, action) => {
        state.loading = false
        state.success = true

        const index = state.list.findIndex(
          (m) => m.menu_key === action.payload.menu_key
        )
        if (index !== -1) {
          state.list[index] = action.payload
        }
      })
      .addCase(updateMegaMenu.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getMegaMenuByKey.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getMegaMenuByKey.fulfilled, (state, action) => {
        state.loading = false
        state.selected = action.payload // ✅ store single menu
      })
      .addCase(getMegaMenuByKey.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { resetMegaMenuState } = megaMenuSlice.actions
export const selectMegaMenu = (state) => state.megaMenu
export default megaMenuSlice.reducer
