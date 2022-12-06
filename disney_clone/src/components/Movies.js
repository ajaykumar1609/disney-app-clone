import React from 'react'
import styled from 'styled-components'

function movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Wrap>
                <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/15-Best-Time-Travel-Movies.jpg?q=50&fit=contain&w=943&h=&dpr=1.5"/>
            </Wrap>
            <Wrap>
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/20/1600x874/screen-shot-2017-05-15-at-95711-am.png?resize=980:*"/>
            </Wrap>
            <Wrap>
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/20/1494856900-flight-of-the-navigator-original.jpg?crop=1xw:1.0xh;center,top&resize=980:*"/>
            </Wrap>
            <Wrap>
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/20/1600x939/screen-shot-2017-05-15-at-102233-am.png?resize=980:*"/>
            </Wrap>
            <Wrap>
                <img src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/15-Best-Time-Travel-Movies.jpg?q=50&fit=contain&w=943&h=&dpr=1.5"/>
            </Wrap>
            <Wrap>
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/20/1600x874/screen-shot-2017-05-15-at-95711-am.png?resize=980:*"/>
            </Wrap>
            <Wrap>
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/20/1494856900-flight-of-the-navigator-original.jpg?crop=1xw:1.0xh;center,top&resize=980:*"/>
            </Wrap>
            <Wrap>
                <img src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/20/1600x939/screen-shot-2017-05-15-at-102233-am.png?resize=980:*"/>
            </Wrap>
        </Content>
    </Container>
  )
}

export default movies
const Container = styled.div`
    
`
const Content = styled.div`
    margin-top: 20px;
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    box-shadow: rgba(68, 68, 69, 0.56) 0px 22px 70px 4px;
    transition:all 500ms;
    img{
        width:100%;
        height:100%;
        object-cover:fit;
    }
    &:hover{
        cursor:pointer;
        box-shadow: rgba(255, 255, 255, 0.7) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
        transform:scale(1.07)
    }
`