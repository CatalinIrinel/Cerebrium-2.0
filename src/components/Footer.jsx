import {
  Heading,
  HStack,
  IconButton,
  Image,
  Link as LinkC,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Stack
      w={'full'}
      minH={'200px'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={`url('/images/Bg2.webp')`}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      bgPos={'center'}
      position={'relative'}
      color={'textLight'}
      gap={['2rem', null, '3rem']}
      zIndex={1}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%)',
        zIndex: 2,
      }}
    >
      <Stack
        w={'full'}
        maxW={'90rem'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
        py={'2rem'}
      >
        <HStack w={'full'} justifyContent={'space-between'} flexWrap={'wrap'}>
          <Stack
            w={{ base: 'full', md: '250px' }}
            alignItems={'center'}
            gap={'1.5rem'}
          >
            <Image width={'250px'} src={'/images/cerebrium-lw.png'} />
            <HStack w={'250px'} justifyContent={'space-between'}>
              <LinkC
                target="_blank"
                aria-label="Facebook"
                rel="noreferrer"
                href={'https://facebook.com'}
              >
                <IconButton
                  variant={'ghost'}
                  fontSize={'2rem'}
                  _hover={{ bg: '#f1f1f1', color: 'brand' }}
                  icon={<FaFacebook />}
                />
              </LinkC>
              <LinkC
                target="_blank"
                aria-label="Twitter"
                rel="noreferrer"
                href={'https://twitter.com'}
              >
                <IconButton
                  variant={'ghost'}
                  fontSize={'2rem'}
                  _hover={{ bg: '#f1f1f1', color: 'brand' }}
                  icon={<FaTwitter />}
                />
              </LinkC>
              <LinkC
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
                href={'https://instagram.com'}
              >
                <IconButton
                  variant={'ghost'}
                  fontSize={'2rem'}
                  _hover={{ bg: '#f1f1f1', color: 'brand' }}
                  icon={<FaInstagram />}
                />
              </LinkC>
              <LinkC
                target="_blank"
                aria-label="Tiktok"
                rel="noreferrer"
                href={'https://tiktok.com'}
              >
                <IconButton
                  variant={'ghost'}
                  fontSize={'2rem'}
                  _hover={{ bg: '#f1f1f1', color: 'brand' }}
                  icon={<FaTiktok />}
                />
              </LinkC>
              <LinkC
                target="_blank"
                aria-label="Youtube"
                rel="noreferrer"
                href={'https://youtube.com'}
              >
                <IconButton
                  variant={'ghost'}
                  fontSize={'2rem'}
                  _hover={{ bg: '#f1f1f1', color: 'brand' }}
                  icon={<FaYoutube />}
                />
              </LinkC>
            </HStack>
          </Stack>
          <Stack
            gap={'1.5rem'}
            w={{ base: 'full', md: '250px' }}
            alignItems={'center'}
            fontSize={'1.25rem'}
          >
            <Heading as={'h3'}>Politici</Heading>
            <Link to={'/termeni-conditii'}>Termeni și condiții</Link>
            <Link to={'/termeni-utilizare'}>Termeni de utilizare</Link>
            <Link to={'/gdpr'}>Politica GDPR</Link>
          </Stack>
        </HStack>
      </Stack>
      <HStack
        bgColor={'titleDark'}
        w={'full'}
        alignItems={'center'}
        justifyContent={'center'}
        px={{ base: '1rem', lg: 0 }}
        minH={'50px'}
      >
        <Text>
          Cerebrium
          <strong>&#9400; {new Date().getFullYear()}</strong>. All rights
          reserved. Created by Digidev Innotech SRL.
        </Text>
      </HStack>
    </Stack>
  );
};

export default Footer;
