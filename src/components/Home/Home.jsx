import React from 'react';
import image1 from '../../images/about.jpg';
import CustomeCard2 from '../CustomeCard2';

//images

import princeofParadise from '../../images/PrinceOfParadise.jpg';
import ringOfFire from '../../images/ringOfFire.jpg';
import vectGraphic from '../../images/vectGraphic.png';
import { Box } from '@chakra-ui/react';
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Qube</h1>
          <p>Solution to all your lighting requirement</p>
        </main>
      </div>

      <div className="home2" id="aboutus">
        <img src={vectGraphic} alt="vector graphic" />
        <div>
          <p>
            We are one and only solutions to the lighting problems you face
            every day. We are leading lighting company whose aim is to increases
            the look and life style of our customer.
          </p>
        </div>
      </div>

      <div className="home3">
        <div>
          <h1>About Us</h1>
          <div>
            <p>
              We are a lighting manufacturing company that provides custom
              lighting solution for your place. We work with wide range of
              materials that best suits the purpose and fuction and yes, just
              the way you want it. We pick up challenges and guess what, We are
              quick!
            </p>
            <p>
              We are not only into qesthetics, we work and commit overselves to
              making your place and mood bright
            </p>
          </div>
        </div>
      </div>

      <div className="home4">
        <div>
          <h1>Product Range</h1>
          <div>
            <p>
              QUBE provides a wide range of possiblites to help you choose and
              create a lighting product that is best suitable for your need and
              place.
            </p>
            <p>
              Among the wide range of categories we pour light onto, here are
              some of our best creations that were delivered with care.
            </p>
          </div>
        </div>
      </div>

      <Box
        id="product"
        backgroundColor={'#090c31'}
        display="flex"
        paddingBottom={'4rem'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}
        // padding={'1rem'}
        alignItems={'center'}
      >
        <CustomeCard2
          image={image1}
          title={'The Elegant'}
          dec={
            'This metal, ceiling pendant lamp is a subtle dominator and the boss of event every place it fits info'
          }
        />
        <CustomeCard2
          image={princeofParadise}
          title={'Prince Of Paradise'}
          dec={
            'This mighty Prince,Ruler of all. Has to be the spotlight. Elegance, power and strength is just a little of what this Prince portrays. Sturdy, massive and a centre of attraction suitable for any placel.'
          }
        />

        <CustomeCard2
          image={ringOfFire}
          title={'Ring of Fire'}
          dec={
            'This fancy, powerful ring that makes any place feel and look more superior thon ever! Strong yet subtle light that increases aesthetic and brings in control being the main centre of attraction.'
          }
        />
        <CustomeCard2
          image={ringOfFire}
          title={'Ring of Fire'}
          dec={
            'This fancy, powerful ring that makes any place feel and look more superior thon ever! Strong yet subtle light that increases aesthetic and brings in control being the main centre of attraction.'
          }
        />
        <CustomeCard2
          image={ringOfFire}
          title={'Ring of Fire'}
          dec={
            'This fancy, powerful ring that makes any place feel and look more superior thon ever! Strong yet subtle light that increases aesthetic and brings in control being the main centre of attraction.'
          }
        />
        <CustomeCard2
          image={ringOfFire}
          title={'Ring of Fire'}
          dec={
            'This fancy, powerful ring that makes any place feel and look more superior thon ever! Strong yet subtle light that increases aesthetic and brings in control being the main centre of attraction.'
          }
        />
      </Box>
    </>
  );
};

export default Home;
