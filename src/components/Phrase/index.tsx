import { FC, useEffect, useState } from 'react'

interface PhraseProps {
    phrase: string;
}

/**
 *  Script used to extract the url from the html document 
import * as cheerio from 'cheerio';
import * as fs from 'fs';

const buffer = fs.readFileSync('document.html');
const $ = cheerio.loadBuffer(buffer);
const selection = $('section article div b[class="ramp ref"]')

let url = ''

selection.each((index, element) => {
    const value = $(element).attr('value');
    url += value;
});
console.log('url', url);
 */

const Phrase: FC<PhraseProps> = ({ phrase }) => {


    const [renderedPhrase, setRenderedPhrase] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const letters = renderedPhrase.split("")

    useEffect(() => {
        if (renderedPhrase === phrase || currentIndex >= phrase.length) {
            return
        }

        const timer = setTimeout(() => {
            setRenderedPhrase((prev) => {

                const next = prev + phrase[currentIndex]
                setCurrentIndex(currentIndex + 1)
                return next
            })
        }, 1500)

        return () => {
            clearTimeout(timer)
        }

    }, [renderedPhrase, currentIndex, phrase])


    return (
        <ul>{letters.map((letter, index) => <li key={letter + "_" + index}>{letter}</li>)}</ul>
    )
}

export default Phrase