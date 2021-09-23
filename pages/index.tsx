import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Container from '../client/components/Container'
import Header from '../client/modules/Header'

interface Props {
  launch: {
    mission: string
    site: string
    timestamp: number
    rocket: string
  }
}
const IndexPage: NextPage<Props> = ({ launch }) => {
  const date = new Date(launch.timestamp)

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main>
        <Container>
          <>
            <h1>Next SpaceX Launch: {launch.mission}</h1>
            <p className="para">{`${launch.rocket} ${
              date < new Date() ? 'took' : 'will take'
            } off from ${launch.site} on ${date.toDateString()}`}</p>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, rem. Aliquid quam rerum
              ea fuga, similique est voluptate at quia maxime, adipisci expedita, maiores enim
              dolorum laudantium illum magni vel. Ad eum voluptatem perspiciatis omnis, explicabo
              nobis aliquid pariatur a molestias dolorem repudiandae nemo, ducimus impedit veniam
              error aliquam! Nobis praesentium exercitationem necessitatibus doloremque. Ab quis
              reprehenderit nostrum praesentium reiciendis.
            </p>
          </>
        </Container>
      </main>

      <style jsx>{`
        .para {
          text-align: justify;
        }
      `}</style>
    </>
  )
}
export default IndexPage

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/launches/next')
  const nextLaunch = await response.json()
  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  }
}
