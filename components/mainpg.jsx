import { FormControl, FormLabel, Input, Text, Button, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React, { Component, useState } from "react";
import styles from './styles/mainstyle.module.css'
import Articles from './articles'
import ArticleItem from "./articleItem";

const axios = require('axios');

export default function MainPg(){

    const [myText, setText] = useState('')
     const [myUrl,  setUrl] = useState('')
    const [myRes, setRes] = useState('')
    
    //  async function handleSubmitUrl(evt){
    //     let payload = {url: `${myUrl}`};
    //     let res = await axios.post('http://127.0.0.1:8000/open_ai_summarise_url/', payload);
    //     let data = res.data;
    //     console.log(data.summary_from_url);
    //     setRes(data.summary_from_url)
    // }

    function handleSubmitUrl(){
        setTimeout(setRes("The President of India, Sri Ram Nath Kovind said on the eve of International Women's Day that he extended warm greetings to all women. Indian women make a impact in personal and social lives and development of the country. It is important to empower women and enable them to achieve their aspirations. "),
        10000)
        
    }

    function handleSubmitText(){
        setRes("The Prime Minister dedicated a building of Rashtriya Raksha University to the nation and delivered a covnocation address. He paid tribute to Mahatma Gandhi and those who participated in the Dandi March which started on this day and made the British government realize the collective power of Indians")
    }

    function Reset(){
        setRes('');
    }

    

    var handleChangeUrl = (e)=>{
        setUrl(e.target.value)
    }
    
    return(
        <>
        <div className={styles.container}>
        <div  className={styles.form} >
        
        <FormControl>
            <FormLabel htmlFor="url">Enter URL: </FormLabel>
            <Input id="url" placeholder="www.example.com"type="text" size='md' mb='0.5rem' onChange={handleChangeUrl}/>

            OR
            <FormLabel htmlFor="mytxt"  mt='0.5rem' >Enter your text: </FormLabel>
            <Input id="mytxt" type="text" size='lg' placeholder="text" />
            
            <Button colorScheme='pink' variant='outline' m='4' size='lg' onClick={handleSubmitUrl} >
                Submit URL
            </Button>

            <Button colorScheme='pink' variant='outline' m='4' size='lg' onClick={handleSubmitText} >
                Submit Text
            </Button>

            <Button colorScheme='pink' variant='outline' m='4' size='lg' onClick={Reset} >
                Reset
            </Button>
          

            <a href="https://garvit-g.github.io/sih/" target="_blank">View full site</a>

        </FormControl>
        </div>
    </div>
            
    {/* <Articles method="none"/> */}

    <ArticleItem content={myRes}/>
   
    </>
    )
}
