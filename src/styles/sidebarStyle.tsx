
export const drawerWidth = 220;
const sidebarStyle =
{
       width: `${drawerWidth}px`,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
}
export default sidebarStyle;