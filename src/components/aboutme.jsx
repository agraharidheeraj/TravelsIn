import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.JPG";
export default function aboutme() {
  return (
    <Section id="aboutme">
       <div className="info">
            <img src={avatarImage} alt="" height={200}  />
          </div>
          <div className="details">
              <h4>Dheeraj Agrahari</h4>
              <span>Web Developer | Youtuber | Video Editor</span>
            </div>
      <div className="title">
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
        Hey ! I am Dheeraj Agrahari and Studying in Lovely Professional University and passionate about web Development.
        Also I am Youtuber and Video Editor I have work with Many Cliend as a Freelance Video Editor.
          </p>
         
        </div>
      
      </div>
      
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      margin:1rem 14rem 1rem 14rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
    
      .about{
         display : flex;
         align-item: center;
      }
      
        }
      }
    }
  }
  .info{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin-top: 3rem;
    padding:0rem;
  }
    img {
      border-radius: 50%;
      height: 320px;
      width:330px;
      box-shadow:2px 2px 10px black;
    }
    .details {
        display:flex;
        flex-direction:column;
        padding:1rem;
        justify-content: center;
        align-items: center;
        gap:1rem;
         font-size:20px;
         font-weight:500;
         }
      h4{
        color:red;
        font-size:3rem;

      }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
