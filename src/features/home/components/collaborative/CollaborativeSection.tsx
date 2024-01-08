import DedicatedTeamIcon from '@/assets/lottie/dedicated-team-animation.json'
import ProjectBasedIcon from '@/assets/lottie/project-based-animation.json'
import TalentMatchingIcon from '@/assets/lottie/talent-matching-animation.json'

import { SectionWrapper } from '@/components/SectionWrapper'
import { theme } from '@/config/theme'
import { CollaborativeButton } from '@/features/home/components/collaborative/CollaborativeButton'
import { CollaborativeItem, CollaborativeItemType } from '@/features/home/components/collaborative/CollaborativeItem'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, Grid, Typography } from '@mui/material'
import { useState } from 'react'

const collaborativeModels: CollaborativeItemType[] = [
  {
    icon: TalentMatchingIcon,
    label: 'Talent Matching',
    desc: 'Access specialized IT professionals to supplement your team, ideal for both short-term and long-term projects.',
    items: [
      {
        name: 'Web Development',
        summary: 'Mastery in HTML, CSS, JavaScript, and popular frameworks such as React.js, Angular, and Vue.js.',
      },
      {
        name: 'Backend Development',
        summary:
          'Expertise in server-side languages such as Node.js, Python, Java, Ruby, and .NET. Familiarity with server architecture and database management.',
      },
      {
        name: 'Mobile App Development',
        summary:
          'Proficiency in both native and cross-platform app development, using Swift, Objective-C, Kotlin, Java, Flutter, and React Native.',
      },
      {
        name: 'Full-Stack Development',
        summary:
          'Comprehensive knowledge of both front-end and back-end technologies, providing a holistic approach to project development.',
      },
      {
        name: 'E-commerce Development',
        summary:
          'Expertise in developing e-commerce platforms using solutions like Shopify, Magento, WooCommerce, and BigCommerce.',
      },
      {
        name: 'Custom Software Development',
        summary: 'Ability to design and build bespoke software applications tailored to specific business needs.',
      },
      {
        name: 'Cloud Computing & DevOps',
        summary:
          'Proficiency in cloud platforms like AWS, Azure, and Google Cloud, and DevOps practices for continuous integration and delivery.',
      },
      {
        name: 'UI/UX Design',
        summary:
          'Skilled in creating intuitive and user-friendly design interfaces that enhance customer satisfaction and engagement.',
      },
      {
        name: 'Database Management',
        summary: 'Familiarity with SQL and NoSQL databases such as MySQL, PostgreSQL, MongoDB, and Cassandra.',
      },
    ],
  },
  {
    icon: DedicatedTeamIcon,
    label: 'Dedicated Team',
    desc: 'Enhance your in-house capabilities with a full-fledged team of IT experts, ready to take on continuous or large-scale projects.',
    items: [
      {
        name: 'Customized Team Structure',
        summary:
          'Teams are assembled based on your project requirements. We match skills, experience, and even team dynamics to your needs.',
      },
      {
        name: 'Scalability',
        summary:
          'The team size can be scaled up or down based on the changing needs of your project. This provides flexibility in managing resources and costs.',
      },
      {
        name: 'Focused Work',
        summary:
          'The team works exclusively on your project, ensuring dedicated efforts and complete focus towards achieving project goals.',
      },
      {
        name: 'Skills Diversity',
        summary:
          'The team consists of diverse roles such as project managers, software developers, UI/UX designers, QA testers, etc., ensuring all aspects of your project are adequately handled.',
      },
      {
        name: 'Seamless Integration',
        summary:
          'Our dedicated teams can easily integrate with your in-house teams, providing a smooth collaboration experience.',
      },
      {
        name: 'Complete Control',
        summary:
          "You maintain full control over the project, with regular updates, meetings, and the ability to direct the team's efforts.",
      },
      {
        name: 'Administrative Support',
        summary:
          'We take care of all administrative, HR, and infrastructure issues, freeing you to focus purely on the project outcomes.',
      },
      {
        name: 'High Quality Standards',
        summary:
          'All our teams adhere to the highest quality standards, following established software development methodologies and best practices.',
      },
      {
        name: 'Cost and Time Efficiency',
        summary:
          'With a dedicated team, you save on recruitment costs and time, as we provide a ready-to-go team of professionals.',
      },
      {
        name: 'IP Protection',
        summary: 'All intellectual property rights pertaining to the project are retained by you.',
      },
      {
        name: 'Reliability and Consistency',
        summary:
          'A dedicated team offers reliability and consistency, as the same team works on your project from start to finish, ensuring a thorough understanding of your project requirements and business goals.',
      },
    ],
  },
  {
    icon: ProjectBasedIcon,
    label: 'Project Based',
    desc: 'Delegate your entire project to our skilled team, and we deliver a turnkey solution that aligns perfectly with your vision.',
    items: [
      {
        name: 'End-to-End Solution',
        summary:
          'From initial planning and ideation to execution, testing, and delivery, we handle the entire project lifecycle.',
      },
      {
        name: 'Dedicated Team',
        summary:
          'As with our dedicated team model, a specialized team is assigned to your project, ensuring focused and consistent work.',
      },
      {
        name: 'Hands-Off Approach',
        summary:
          'This model is ideal if you prefer to remain hands-off during the project process. We take complete responsibility, while keeping you informed of the progress.',
      },
      {
        name: 'Fixed Cost',
        summary:
          'Pricing is usually based on the project scope, providing a clear upfront cost. This can be beneficial for budget planning and control.',
      },
      {
        name: 'Timely Delivery',
        summary:
          'We strictly adhere to the defined timeline, ensuring that your project is completed and delivered on schedule.',
      },
      {
        name: 'Quality Assurance',
        summary:
          'Quality checks and testing are integral parts of our project-based model, ensuring that the final product is up to the highest standards.',
      },
      {
        name: 'Expert Management',
        summary:
          'Your project will be overseen by experienced project managers who ensure smooth execution and timely delivery.',
      },
      {
        name: 'Risk Management',
        summary:
          'We handle all potential risks and issues that might arise during the project lifecycle, mitigating them effectively.',
      },
      {
        name: 'Resource Allocation',
        summary:
          'We manage all resource allocation based on the project requirements, saving you from the complexity of resource management.',
      },
      {
        name: 'Intellectual Property Rights',
        summary: 'All intellectual property rights for the completed project are fully transferred to you.',
      },
      {
        name: 'Post-Project Support',
        summary:
          'We provide ongoing support and maintenance after project completion to ensure the solution continues to perform optimally.',
      },
    ],
  },
]

export const CollaborativeSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const isMobile = useIsMobile()

  const handleOnClickButton = (index: number) => {
    setActiveIndex(index)
    if (isMobile) {
      window.scrollTo({
        top: 4500,
        behavior: 'smooth',
      })
    }
  }
  return (
    <SectionWrapper>
      <Grid container textAlign="left" columnSpacing="40px" rowSpacing={isMobile ? '24px' : ''} alignItems="center">
        <Grid item xs={12} sm={7}>
          <Typography variant="h2" fontWeight={theme.typography.fontWeightBold} color={theme.palette.primary.main}>
            Tailored Collaboration for Maximum Impact
          </Typography>
          <Box component="div" className="ml-auto mr-auto mt-4">
            <Typography variant="h4" fontWeight={theme.typography.fontWeightRegular} color={theme.palette.primary.main}>
              Our Pure Play team extension approach allows us to provide you with three distinct collaboration models,
              each designed to best fit your business objectives.
            </Typography>
          </Box>
          <Box marginTop="48px" sx={isMobile ? { display: 'flex', flexDirection: 'column', alignItems: 'center' } : {}}>
            {collaborativeModels.map((item, index) => (
              <CollaborativeButton
                key={item.label}
                label={item.label}
                desc={item.desc}
                isActive={activeIndex === index}
                handleOnClick={() => handleOnClickButton(index)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <CollaborativeItem data={collaborativeModels[activeIndex]}></CollaborativeItem>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}
