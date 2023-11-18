import { Button, Stack } from '@mui/material';
import React from 'react';
import Groups3Icon from '@mui/icons-material/Groups3';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { useRouter } from 'next/router';

const AdminNavigateActions = () => {
   const { push } = useRouter();

   return (
      <Stack direction="row" gap={1} py={3}>
         <Button endIcon={<Groups3Icon />} variant="contained" onClick={() => push('admin/team')}>
            Teams
         </Button>
         <Button endIcon={<ViewCarouselIcon />} variant="contained" onClick={() => push('admin/banner')}>
            Change banner
         </Button>
         <Button endIcon={<WebAssetIcon />} variant="contained" onClick={() => push('admin/footer')}>
            Change footer
         </Button>
      </Stack>
   );
};

export default AdminNavigateActions;
