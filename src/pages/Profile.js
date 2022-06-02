import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const Profile = () => {
  const Wrapper = styled.div`
    margin: 10em auto;
    padding: 3em 2.5em;
    background-color: white;
    box-shadow: 0 12px 24px rbga(0, 0, 0, 0.1);
    border-radius: 0.5em;
    width: 55rem;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
  `;
  const Info = styled.div`
    margin-left: 3rem;

    h1 {
      font-size: 1.8rem;
    }
    img {
      height: 7rem;
      width: 7rem;
      border: 2px solid #0050ac;
      border-radius: 50%;
      margin-top: 0.9rem;
    }
    p {
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 1rem;
    }
  `;
  const Details = styled.div`
    margin-left: 11rem;

    h3 {
      font-size: 1.7rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }
    p {
      margin-top: 1rem;
    }
  `;
  return (
    <>
      <Navbar />
      <Wrapper>
        <Info>
          <h1>Your Profile</h1>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="profile image...!"
          />
          <p className="name">Andrew Mathew</p>
          <p className="phone">Phone: +91-54893058650</p>
          <p className="course">Course: btech</p>
          <p className="branch">Branch: CSE</p>
          <p className="year">Year of graduation: 2023</p>
        </Info>
        <Details>
          <h3>Hello Learner</h3>
          <p className="email">Email: abc@test.com</p>
          <p className="reg">Registration Number: 4843516515</p>
        </Details>
      </Wrapper>
    </>
  );
};

export default Profile;
