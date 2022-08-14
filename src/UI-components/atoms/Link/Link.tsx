import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export const Link = ({
  children,
  sx,
  underline,
  color,
  ...props
}: MuiLinkProps & Pick<RouterLinkProps, 'to' | 'replace'>) => (
  <MuiLink
    {...props}
    component={RouterLink}
    underline={underline || 'hover'}
    color={color || 'text.primary'}
    sx={
      sx || {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        maxWidth: 'max-content',
        whiteSpace: 'nowrap',
      }
    }
  >
    {children}
  </MuiLink>
);
