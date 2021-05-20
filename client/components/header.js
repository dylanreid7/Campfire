import React from 'react';
import { Typography, Box, Button} from '@material-ui/core';

export default function Header() {
  return (
    <>
    <Box
      marginLeft="14%"
      marginRight="14%"
      display="flex"
      flexGrow={1}
      justifyContent="space-around"
      alignItems="center"
    >
      <a>
        <Button>
          <Typography variant="h4" color="secondary">Campfire</Typography>
        </Button>
      </a>
    </Box>
  </>
  );
}