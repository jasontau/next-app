import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

interface WelcomeTemplate {
  name: string;
}

const WelcomeTemplate = ({ name }: WelcomeTemplate) => {
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Tailwind>
      <Body className={'bg-white'}>
        <Container align='left'>
          <Text className={'font-bold text-3xl'}>Hello {name}</Text>
          <Link href='https://codewithmosh.com'>code with mosh</Link>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: '#fff'
}

const heading: CSSProperties = {
  fontSize: '32px'
}

export default WelcomeTemplate