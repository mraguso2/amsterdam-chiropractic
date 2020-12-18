import React from 'react';
import styled from 'styled-components';
// import { above, below } from '../utilities/breakpoints';
import { SectionStyled, SectionTitleStyled } from '../utilities/styledbits';
import iconCheveron from '../images/icon-cheveron-right-circle.svg';
import arrow from '../images/Arrow1.svg';

const ServiceItem = styled.div`
  background: rgba(255, 255, 255, 0.3);
  max-width: 450px;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 35px rgba(35, 179, 141, 0.11);
  position: relative;
  margin-bottom: 2rem;
`;

const EvalItemContainer = styled.ul`
  margin-top: 1.25rem;
  ::after {
    /* content: url(${arrow}); */
    margin-right: 0.5rem;
    min-width: 25px;
    position: relative;
    display: inline-block;
  }
  li {
    display: flex;
    align-items: center;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    ::before {
      content: url(${iconCheveron});
      margin-right: 0.5rem;
      min-width: 25px;
      position: relative;
      display: inline-block;
      height: 25px;
      width: 25px;
    }
  }
`;

const ServiceTitle = styled.h1`
  color: #00533e;
  background: linear-gradient(45deg, white, rgba(255, 255, 255, 0));
  border-radius: 5px;
  padding-left: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const ServiceTitle2 = styled(ServiceTitle)`
  background: linear-gradient(45deg, rgba(255, 255, 255, 0), white);
`;

const ServiceTitle3 = styled(ServiceTitle)`
  background: linear-gradient(45deg, rgba(255, 255, 255, 0), white, rgba(255, 255, 255, 0));
`;

const ArrowStyled = styled.svg`
  top: -50px;
  right: -20px;
  height: 100px;
  transform: rotate(16deg);
  z-index: 1;
`;

const MassageTitle = styled.h1`
  color: #00533e;
  background: linear-gradient(45deg, rgba(255, 255, 255, 0), #ffffff54, rgba(255, 255, 255, 0));
`;

const ServiceStyled = styled(SectionStyled)`
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(0,631,318)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%2310b38a'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.03'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-size: cover;
  padding-top: 2rem;
  position: relative;
`;

const Services = () => (
  <ServiceStyled id="servicesoffered">
    <SectionTitleStyled width="11.5rem" widthSM="8.75rem" colorLine="hsl(164, 68%, 42%)">
      Services Offered
    </SectionTitleStyled>
    <div className="m-auto" style={{ maxWidth: 450 }}>
      <ServiceItem>
        <p className="absolute right-0 top-0 mt-3 mr-6">
          $<span className="text-3xl">65</span>
        </p>
        <ServiceTitle className="text-lg mt-2 mb-2">Initial Chiropractic Evaluation</ServiceTitle>
        <EvalItemContainer>
          <li>Review patient history and health conditions</li>
          <li>Perform a physical examination</li>
          <li>Assess spinal & musculoskeletal joint function</li>
          <li>Discuss the best treatment plans</li>
        </EvalItemContainer>
      </ServiceItem>
      <div className="relative" style={{ maxWidth: 450 }}>
        <ArrowStyled
          width="53"
          height="116"
          viewBox="0 0 53 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0"
        >
          <path
            d="M40.4009 61.7298L40.0567 62.0925L40.0567 62.0925L40.4009 61.7298ZM9.8228 110.674C9.72496 110.932 9.85497 111.22 10.1132 111.318L14.3212 112.913C14.5795 113.011 14.8681 112.881 14.966 112.622C15.0638 112.364 14.9338 112.075 14.6756 111.978L10.9351 110.56L12.3524 106.82C12.4502 106.562 12.3202 106.273 12.062 106.175C11.8038 106.077 11.5151 106.207 11.4173 106.466L9.8228 110.674ZM1.94703 1.4972C3.14631 1.62528 4.29382 1.76515 5.39172 1.91652L5.5283 0.925891C4.4196 0.773034 3.26194 0.631942 2.05322 0.502856L1.94703 1.4972ZM12.1194 3.11991C14.6284 3.69312 16.773 4.35256 18.6043 5.09022L18.9779 4.16264C17.0882 3.40148 14.8917 2.7275 12.3421 2.14503L12.1194 3.11991ZM24.3714 8.43183C26.2282 10.0219 27.3794 11.8166 28.0737 13.7946L29.0173 13.4634C28.2666 11.3249 27.0167 9.38065 25.0219 7.67229L24.3714 8.43183ZM29.0262 20.3985C29.035 22.5444 28.8598 24.8207 28.6773 27.2279L29.6744 27.3035C29.8562 24.9065 30.0352 22.5879 30.0262 20.3944L29.0262 20.3985ZM28.3017 34.1207C28.2679 36.3665 28.3555 38.6835 28.6849 41.0535L29.6754 40.9158C29.3549 38.6096 29.2683 36.3457 29.3016 34.1358L28.3017 34.1207ZM30.3356 47.8109C31.0825 49.8814 32.0803 51.9753 33.3996 54.0826L34.2472 53.552C32.9662 51.5058 31.9994 49.4762 31.2763 47.4716L30.3356 47.8109ZM37.6186 59.6068C38.372 60.435 39.1834 61.2638 40.0567 62.0925L40.7451 61.3671C39.8888 60.5547 39.0947 59.7434 38.3583 58.9339L37.6186 59.6068ZM40.0567 62.0925C40.994 62.9819 41.8549 63.8563 42.643 64.716L43.3801 64.0402C42.5752 63.1622 41.6979 62.2712 40.7451 61.3671L40.0567 62.0925ZM47.0636 70.5741C48.4559 72.9478 49.2669 75.1874 49.6005 77.3L50.5883 77.1441C50.2323 74.8901 49.3719 72.5329 47.9262 70.0682L47.0636 70.5741ZM48.9284 84.3575C48.1436 86.5333 46.847 88.5785 45.1693 90.501L45.9227 91.1585C47.662 89.1655 49.033 87.015 49.8691 84.6967L48.9284 84.3575ZM39.7647 95.4316C37.8577 96.87 35.7758 98.2169 33.6081 99.4772L34.1107 100.342C36.3045 99.0662 38.4211 97.6976 40.3669 96.2299L39.7647 95.4316ZM27.073 102.937C24.7875 104.049 22.5087 105.075 20.3316 106.021L20.7299 106.938C22.9152 105.989 25.208 104.957 27.5107 103.836L27.073 102.937ZM13.4976 108.918C12.2535 109.443 11.105 109.935 10.085 110.395L10.4957 111.307C11.5046 110.852 12.6442 110.364 13.8867 109.839L13.4976 108.918ZM40.4009 61.7298L39.7126 62.4552L39.7126 62.4552L40.4009 61.7298ZM9.35524 110.496C9.15955 111.013 9.41958 111.59 9.93604 111.786L18.3521 114.975C18.8686 115.17 19.4459 114.91 19.6416 114.394C19.8373 113.878 19.5772 113.3 19.0608 113.105L11.5798 110.27L14.4144 102.789C14.6101 102.273 14.3501 101.695 13.8336 101.5C13.3172 101.304 12.7399 101.564 12.5442 102.08L9.35524 110.496ZM1.89393 1.99437C3.08849 2.12195 4.23092 2.26121 5.32343 2.41184L5.59659 0.430577C4.4825 0.276975 3.31975 0.135273 2.10632 0.00568338L1.89393 1.99437ZM12.008 3.60735C14.4967 4.17592 16.6153 4.82811 18.4175 5.55401L19.1647 3.69885C17.2459 2.92594 15.0233 2.2447 12.4535 1.65759L12.008 3.60735ZM24.0462 8.81159C25.8339 10.3426 26.9358 12.0625 27.6019 13.9602L29.489 13.2978C28.7102 11.079 27.411 9.06 25.3471 7.29252L24.0462 8.81159ZM28.5262 20.4005C28.5349 22.5226 28.3616 24.7778 28.1787 27.1901L30.173 27.3413C30.3543 24.9494 30.5353 22.6097 30.5262 20.3923L28.5262 20.4005ZM27.8018 34.1132C27.7677 36.3769 27.8559 38.7204 28.1897 41.1223L30.1706 40.847C29.8545 38.5726 29.7685 36.3353 29.8015 34.1433L27.8018 34.1132ZM29.8653 47.9805C30.624 50.0841 31.6374 52.21 32.9758 54.348L34.671 53.2867C33.4091 51.271 32.4578 49.2736 31.7466 47.3019L29.8653 47.9805ZM37.2487 59.9432C38.0107 60.7809 38.8306 61.6184 39.7126 62.4552L41.0892 61.0044C40.2416 60.2001 39.456 59.3976 38.7282 58.5974L37.2487 59.9432ZM39.7126 62.4552C40.642 63.3372 41.4947 64.2034 42.2744 65.0539L43.7487 63.7024C42.9353 62.8151 42.0498 61.9159 41.0892 61.0044L39.7126 62.4552ZM46.6323 70.8271C47.998 73.1552 48.7842 75.3361 49.1066 77.378L51.0821 77.0661C50.7151 74.7415 49.8299 72.3254 48.3574 69.8152L46.6323 70.8271ZM48.458 84.1878C47.699 86.2924 46.4395 88.285 44.7926 90.1722L46.2994 91.4872C48.0695 89.459 49.4776 87.2558 50.3394 84.8664L48.458 84.1878ZM39.4636 95.0324C37.576 96.4563 35.5115 97.7922 33.3568 99.0449L34.362 100.774C36.5689 99.4909 38.7029 98.1114 40.668 96.6291L39.4636 95.0324ZM26.8541 102.487C24.5773 103.596 22.3055 104.618 20.1324 105.562L20.9291 107.397C23.1185 106.446 25.4183 105.411 27.7295 104.285L26.8541 102.487ZM13.303 108.457C12.0582 108.983 10.9052 109.477 9.87968 109.939L10.701 111.763C11.7043 111.311 12.8396 110.824 14.0812 110.3L13.303 108.457Z"
            fill="black"
          />
        </ArrowStyled>
      </div>
      <ServiceItem>
        <ServiceTitle2 className="text-lg mt-2 mb-2">Ongoing Chiropractic Treatment</ServiceTitle2>
        <p className="relative text-center mt-3">
          <em className="text-center">Cost depends on individual patient</em>
        </p>
        <EvalItemContainer>
          <li>Spinal Adjustments</li>
          <li>Rehabilitation Exercises</li>
          <li>Nutrition Education</li>
          <li>
            <span>
              Ultra sound, hot packs, electric stim, trigger point therapy, myofascial release
              <sup>*</sup>
            </span>
          </li>
          <p className="mt-4 text-sm relative m-auto">
            <sup>*</sup>Specific treatements used are based on individual patient needs
          </p>
        </EvalItemContainer>
      </ServiceItem>
      <ServiceItem>
        {/* <MassageTitle className="tracking-wide font-medium text-center mb-3">
        MASSAGE THERAPY
      </MassageTitle> */}
        <ServiceTitle3 className="text-lg mt-2 mb-2">Massage Therapy</ServiceTitle3>
        <div className="mb-4">
          <h3 className="font-light text-lg">Thai Massage</h3>
          <div className="w-56 m-auto">
            <p>60 minutes.......................$90</p>
            <p>90 minutes......................$120</p>
          </div>
        </div>
        <div>
          <h3 className="font-light text-lg">Deep Tissue Massage with hot packs</h3>
          <div className="w-56 m-auto">
            <p>30 minutes.......................$50</p>
            <p>60 minutes.......................$80</p>
          </div>
        </div>
      </ServiceItem>
    </div>
  </ServiceStyled>
);

export default Services;
