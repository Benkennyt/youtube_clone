import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const SideBar = ({selectedCategory, setSelectedCategory}) => (
   <Stack
    direction={'row'}
    sx={{
        overflow: "auto",
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: 'column'},
    }}
   >
    {categories.map((category) => (
        <button 
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{
                background: category.name === selectedCategory && '#009698', color: category.name === selectedCategory ? 'white' : '#009698'
            }}
            key={category.name}
        >
            <span style={{color: category.name === selectedCategory ? 'white' : '#009698', marginRight: '15px', opacity: category.name === selectedCategory ? '1' : '0.5'}}>{category.icon}</span>

            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.5'}}>{category.name}</span>
        </button>
    ))}

   </Stack>
)

export default SideBar
