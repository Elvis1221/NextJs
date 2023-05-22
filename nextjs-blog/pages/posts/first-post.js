import Link from 'next/link';
import {useState} from "react";

import Layout from "../../components/layout";
import Alert from "../../components/Alert";

import css from './first-post.module.css'

export default function FirstPost() {
    const [isAlert, setIsAlert] = useState(false)
    const [value, setValue] = useState('')

    const setAlert = () => setIsAlert(true)

    return (
        <Layout>
            <button className={css.ButtonWrapper}>
                <Link href={'/about-us'}>test</Link>
            </button>
            <input type="text" onChange={(e) => setValue(e.target.value)}/>
            {isAlert ? <Alert type={value}>
                {value === 'success' ? <div>Data has been sent - Success</div>: null }
                {value === 'error' ? <div>Data has been sent - Error</div>: null }
            </Alert> : null}
            <button onClick={setAlert}>Alert</button>
        </Layout>

    );
}