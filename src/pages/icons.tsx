import { FC } from 'react'
import BilingualIcon from '../assets/icons/BilingualIcon'
import PlayButtonIcon from '../assets/icons/PlayButtonIcon'
import CheckIcon from '../assets/icons/CheckIcon'
import GrayCrossIcon from '../assets/icons/GrayCrossIcon'
import GrayPlayIcon from '../assets/icons/GrayPlayIcon'
import OpenAccordionIcon from '../assets/icons/ArrowDown'
import SquarePauseButtonIcon from '../assets/icons/SquarePauseButtonIcon'
import SquarePlayButtonIcon from '../assets/icons/SquarePlayButtonIcon'
import VarningIcon from '../assets/icons/VarningIcon'
import VolumeShadelessIcon from '../assets/icons/VolumeShadelessIcon'
import VolumeWithShadeIcon from '../assets/icons/VolumeWithShadeIcon'
import { IconButton } from '@mui/material'
import { BilingualFullIcon } from '../assets/icons/BilingualFullIcon'
import CrossIcon from '../assets/icons/CrossIcon'
import { VisibilityOnIcon } from '../assets/icons/VisibilityOnIcon'


const icons: FC = () => {
   return (
      <ul>
         <li>
            <VisibilityOnIcon style={{ color: 'red' }} />
            VisibilityOnIcon
         </li>
         <li>
            <BilingualFullIcon />
            BilingualFullIcon
         </li>
         <li>
            <IconButton>
               <CrossIcon />
            </IconButton>
            crossICon
         </li>
         <li>
            <BilingualIcon />
            BilingualIcon
         </li>
         <li>
            <CheckIcon /> CheckIcon
         </li>
         <li>
            <PlayButtonIcon /> PlayButtonIcon
         </li>
         <li>
            <GrayCrossIcon /> GrayCrossIcon
         </li>
         <li>
            <GrayPlayIcon /> GrayPlayIcon
         </li>
         <li>
            <OpenAccordionIcon />
            OpenAccordionIcon
         </li>
         <li>
            <SquarePauseButtonIcon />
            SquarePauseButtonIcon
         </li>
         <li>
            <SquarePlayButtonIcon /> SquarePlayButtonIcon
         </li>
         <li>
            <VarningIcon /> VarningIcon
         </li>
         <li>
            <VolumeShadelessIcon /> VolumeShadelessIcon
         </li>
         <li>
            <VolumeWithShadeIcon /> VolumeWithShadeIcon
         </li>
      </ul>
   )
}

export default icons
