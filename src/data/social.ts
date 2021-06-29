import GitHubIcon from '@material-ui/icons/GitHub'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import SchoolIcon from '@material-ui/icons/School'

interface SocialItem {
  name: string
  href: string
  icon: typeof GitHubIcon
}

const socialItems: SocialItem[] = [
  {
    name: 'github',
    href: 'https://github.com/ziyixi',
    icon: GitHubIcon,
  },
  {
    name: 'scholar',
    href: 'https://scholar.google.com/citations?user=boNM4acAAAAJ&hl=en',
    icon: SchoolIcon,
  },
  {
    name: 'mail',
    href: 'mailto:xiziyi@msu.edu',
    icon: MailIcon,
  },
  {
    name: 'phone',
    href: 'tel:+1-517-505-0802',
    icon: PhoneIcon,
  },
]

export default socialItems
