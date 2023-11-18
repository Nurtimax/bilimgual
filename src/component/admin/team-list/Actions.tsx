import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const TeamListActions = () => {
   const [view, setView] = React.useState('list');

   const handleChange = (_event: React.MouseEvent<HTMLElement>, nextView: string) => {
      setView(nextView);
   };

   return (
      <ToggleButtonGroup
         orientation="horizontal"
         value={view}
         exclusive
         onChange={handleChange}
         sx={{ justifyContent: 'flex-end', py: 3 }}
      >
         <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
         </ToggleButton>
         <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
         </ToggleButton>
      </ToggleButtonGroup>
   );
};

export default TeamListActions;
