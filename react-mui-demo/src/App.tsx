import './App.css'
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns  from '@mui/lab/AdapterDateFns'
import MuiTypography from './Components/MuiTypography'
import MuiButton from './Components/MuiButton'
import MuiTextField from './Components/MuiTextField'
import MuiSelect from './Components/MuiSelect'
import MuiSelect2 from './Components/MuiSelect2'
import MuiRadio from './Components/MuiRadio'
import MuiCheckBox from './Components/MuiCheckBox'
import MuiSwitch from './Components/MuiSwitch'
import MuiRating from './Components/MuiRating'
import MuiAutocomplete from './Components/MuiAutocomplete'
import MuiLayoutBox from './LayoutsComponents/MuiLayoutBox'
import MuiLayoutStack from './LayoutsComponents/MuiLayoutStack'
import MuiLayoutGrid from './LayoutsComponents/MuiLayoutGrid'
import MuiLayoutPaper from './LayoutsComponents/MuiLayoutPaper'
import MuiCard from './LayoutsComponents/MuiCard'
import MuiAccordion from './LayoutsComponents/MuiAccordion'
import MuiImageList from './LayoutsComponents/MuiImageList'
import { MuiNavbar } from './NavigationComponents/MuiNavbar'
import { MuiMenu } from './NavigationComponents/MuiMenu'
import { MuiLink } from './NavigationComponents/MuiLink'
import { MuiBreadcrumbs } from './NavigationComponents/MuiBreadcrumbs'
import { MuiDrawer } from './NavigationComponents/MuiDrawer'
import { MuiSpeedDial } from './NavigationComponents/MuiSpeedDial'
import { MuiBottomNavigation } from './NavigationComponents/MuiBottomNavigation'
import { MuiAvatar } from './DataDisplayComponents/MuiAvatar'
import { MuiBadge } from './DataDisplayComponents/MuiBadge'
import { MuiList } from './DataDisplayComponents/MuiList'
import { MuiChip } from './DataDisplayComponents/MuiChip'
import { MuiChip2 } from './DataDisplayComponents/MuiChip2'
import { MuiTooltip } from './DataDisplayComponents/MuiTooltip'
import { MuiTable } from './DataDisplayComponents/MuiTable'
import { MuiAlert } from './FeedbackComponents/MuiAlert'
import { MuiSnackbar } from './FeedbackComponents/MuiSnackbar'
import { MuiDialog } from './FeedbackComponents/MuiDialog'
import { MuiProgress } from './ProgressRelatedComponents/MuiProgress'
import { MuiSkeleton } from './FeedbackComponents/MuiSkeleton'
import { MuiSkeleton2 } from './FeedbackComponents/MuiSkeleton2'
import { MuiLoadingButton } from './MaterialLabPackage/MuiLoadingButton'
import { MuiDatePicker } from './MaterialLabPackage/MuiDatePicker'
import { MuiTimePicker } from './MaterialLabPackage/MuiTimePicker'
import { MuiDateTimePicker } from './MaterialLabPackage/MuiDateTimePicker'
import { MuiDateRangePicker } from './MaterialLabPackage/MuiDateRangePicker'
import { MuiTabs } from './MaterialLabPackage/MuiTabs'

function App () {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='App'>
        {/* <MuiTypography /> */}
        {/* <MuiButton /> */}
        {/* <MuiTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiSelect2 /> */}
        {/* <MuiRadio /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutocomplete /> */}
        {/* <MuiLayoutBox /> */}
        {/* <MuiLayoutStack /> */}
        {/* <MuiLayoutGrid /> */}
        {/* <MuiLayoutPaper /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordion /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNavbar /> */}
        {/* <MuiMenu /> */}
        {/* <MuiLink /> */}
        {/* <MuiBreadcrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNavigation /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiChip2 /> */}
        {/* <MuiTooltip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackbar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiSkeleton2 /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiDatePicker /> */}
        {/* <MuiTimePicker /> */}
        {/* <MuiDateTimePicker /> */}
        {/* <MuiDateRangePicker /> */}
        <MuiTabs />
      </div>
    </LocalizationProvider>
  )
}

export default App
