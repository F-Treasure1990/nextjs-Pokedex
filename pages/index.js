import Head from 'next/head'
import { Layout } from '../Components/Layout.jsx'
import Link from 'next/link'

export default function Home({pokemon}) {

  return (
    <Layout title='NextJs Pokemon'>
      <h1 className='text-4xl mb-8 text-center'>NextJS Pokemon</h1>
      <ul>
        {pokemon.map((pokeman, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className='border p-4 border-grey my-2 hover:shadow-md capitalize flex items-center justify-center text-lg rounded-md'>
                <img className='w-20 h-20 mr-3' src={pokeman.image} alt={pokeman.name}/>
                <span className='mr-2 font-bold'>{index + 1}.</span>
                {pokeman.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const { results } = await res.json();
    const pokemon = results.map((result, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {...result, image, }
    })
    return {
      props : {pokemon}
    }
  } catch (error) {
    console.error(error)
  }
  
}

