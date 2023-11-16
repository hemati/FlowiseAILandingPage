/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';
import {gtag_report_conversion} from "../ads";
import { logFirebaseEvent } from '../firebaseAnalytics';

const handleViewSignUpClick = (e) => {
  e.preventDefault();
  gtag_report_conversion();
  logFirebaseEvent("click_sign_up");
  //console.log('handleViewSignUpClick');
  window.open("https://dashboard.langflux.space");
}

const packages = [
  {
    header: 'Free',
    name: 'Basic Plan',
    description: 'For individual projects',
    priceWithUnit: '$0.00/',
    buttonText: 'Sign up',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ultimate access to all predefined flows',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Free access for all predefined tools.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Premium support from our expert team',
        isAvailable: true,
      }
    ],
    onClickHandler: handleViewSignUpClick
  }
  // ,
  // {
  //   header: 'Recommended',
  //   name: 'Premium Plan',
  //   priceWithUnit: '$9.99/',
  //   buttonText: 'Coming Soon',
  //   buttonEnable: false,
  //   points: [
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Ultimate access to all predefined flows',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Access to all predefined tools.',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Unlimited number of flows can be created',
  //       isAvailable: true,
  //     },
  //     {
  //       icon: <IoIosCheckmarkCircle />,
  //       text: 'Premium support from our expert team',
  //       isAvailable: true,
  //     }
  //   ],
  //   onClickHandler: null
  // },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="Start for free"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
