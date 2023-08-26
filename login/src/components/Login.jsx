import React, { useState, useEffect } from 'react'

const Users = {
  email: 'test@example.com',
  password: 'test12345@@'
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(regex.test(e.target.value)) {
      setEmailValid(true);  
    } else {
      setEmailValid(false);
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex = 
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if(regex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  const onClickConfirmButton = () => {
    if(email === Users.email && password === Users.password) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("로그인에 실패했습니다.");
    }
  };

  useEffect(() => {
    if(emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[emailValid, passwordValid]);

  return (
    <div className='page'>
      <div className='titleWrap'>
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>

      <div className="contentWrap">
        <div className='inputTitle'>이메일 주소</div>
        <div className='inputWrap'>
            <input 
              type='text'
              className='input' 
              placeholder='text@gmail.com'
              value={email}
              onChange={handleEmail}
            />
        </div>
        <div className="errorMessageWrap">
          {
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )
          }
        </div>

        <div className='inputTitle' style={{marginTop: "26px"}}>비밀번호</div>
        <div className='inputWrap'>
            <input 
              type='password'
              className='input' 
              placeholder='영문, 숫자, 특수문자 포함 8자 이상'
              value={password}
              onChange={handlePassword} 
            />
        </div>
        <div className="errorMessageWrap">
          {
            !passwordValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자를 포함 8자 이상 입력해주세요.</div>
            )
          }
        </div>
      </div>

      <div>
        <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>
          확인
        </button>
      </div>
    </div>
  )
}
