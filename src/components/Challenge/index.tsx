import { useEffect, useState } from 'react'
import { RequestState } from './types'
import { STATUS_MAPPER } from './constants'
import Phrase from '../Phrase'

const Challenge = () => {
    const [requestState, setRequestState] = useState<RequestState>('idle')
    const [_, setPhrase] = useState<string>('')


    useEffect(() => {
        setRequestState('loading')

        fetch(
            'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6f7263'
        ).then(async (response) => {
            const phrase = await response.text()

            setRequestState('success')
            setPhrase(phrase)


        }).then(() => { }).catch(() => {
            setRequestState('error')
        })
    }, [])

    if (requestState === 'success') {
        return <Phrase phrase='hello' />
    }


    return <div>  {STATUS_MAPPER[requestState]} </div>
}

export default Challenge
