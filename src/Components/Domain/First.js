import dotCom from '../images/dotCom.jpg'
import ruler from '../images/ruler.png'
import globe from '../images/globe.webp'
import award from '../images/award.png'
import search from '../images/search.png'
import bullhorn from '../images/bullhorn.webp'
import discount from '../images/discount.png'
import t from '../images/t.jpeg'
import idea from '../images/idea.jpg'
const first = [
    {
      icon: <img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={dotCom} alt="" />,
      title: "The TLD",
      description: "Does the domain extension math the language of the domain name?",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={ruler} alt="" />,
      title: "Domain Length",
      description: "Is the domain short enough to remember?",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={globe} alt="" />,
      title: "Language",
      description: "How complex is the actual domain name?",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={award} alt="" />,
      title: "International recognition",
      description: "Can the domain name be used on an international scale?",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "60px", height: "50px"}} src={search} alt="" />,
      title: "Search engine",
      description: "Does the domain follow search engine guidelines",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={bullhorn} alt="" />,
        title: "Advertising potential",
        description: "Could the domain be used for advertising campaigns?",
      },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={discount} alt="" />,
      title: "Sales Opportunities",
      description: "Can the domain name be used on an international scale?",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={t} alt="" />,
      title: "Typo susceptibility",
      description: "How high is the risk of mistyping the domain name?",
    },
    {
      icon:<img className='border rounded-circle' style={{width: "50px", height: "50px"}} src={idea} alt="" />,
      title: "Business potential",
      description: "Can the domain be used as your company address?",
    },
  ]

  export default first;