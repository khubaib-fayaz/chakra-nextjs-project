import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ConfirmSteps } from './components/ConfirmSteps'

export default function Home() {
  return (
    <div >
      <ConfirmSteps/>
    </div>
  )
}
