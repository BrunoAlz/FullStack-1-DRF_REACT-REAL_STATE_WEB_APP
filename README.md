<h1 align="center">Full-Stack WEB APP</h1>

<table border="0" align="center">
 <tr>
    <td><h1>BACKEND</h1></td>
    <td><h1>FRONTEND</h1></td>
    <td><h1>DATABASE</h1></td>
    <td><h1>DEVOPS</h1></td>
 </tr>
 <tr align="center">
    <td>
    <img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"><br>
    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"><br>
    <img src="https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white">
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white">
    </td>
    <td>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"><br>
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
    <br>
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <br>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <td>
    <img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white" />
    <br>
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
    </td>
    <td>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" /><br>
    <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" /></td>
 </tr>
</table>

<hr>

## BACKEND / API EM DESENVOLVIMENTO...

### API - Endipoints
#### Usuários

<ol>
  <h3>
  <li>Registrar Usuário: </li>
    <ol>
      <li>Requisição: <b>POST</b></li>
      <li>Endpoint: <b>localhost:8000/api/v1/auth/users/</b></li>
      <li>JSON BODY: <b><code>{<br>
      "username": "teste1",<br>
      "first_name": "teste_fn",<br>
      "last_name":"teste_ln",<br>
      "email": "teste1@gmail.com",<br>
      "password": "test123@",<br>
      "re_password": "teste123@"<br>
   }</code></b>
   </li>
    </ol>
  </li>
  </h3>
  <br>
  <h3>
  <li>Ativar Cadastro do usuário via Email: </li>
    <ol>
      <li>Requisição: <b>POST</b></li>
      <li>Endpoint: <b>localhost:8000/api/v1/auth/users/activation/</b></li>
      <li>JSON BODY: <b><code>{<br>
      "uid": "Mw",<br>
      "token": "bfvra6-2651cf5be01c7a1b06e507a33c7c58bb"<br>
   }</code></b>
   </li>
    </ol>
  </li>
  </h3>
  <br>
  <h3>
  <li>Gerar JTW Token para o Login:</li>
    <ol>
      <li>Requisição: <b>POST</b></li>
      <li>Endpoint: <b>localhost:8000/api/v1/auth/jwt/create/</b></li>
      <li>JSON BODY: <b><code>{<br>
      "email": "teste1@gmail.com",<br>
      "password": "test123@",<br>
   }</code></b>
      <li>Response: <b><code>{<br>
      "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3MDIwOTg2OSwianRpIjoiNTZkYjhmMTZlNTFjNGI2MjgzYzBlN2U1NzExODNlYmQiLCJ1c2VyX2lkIjoiMzc2YWE4ZjAtYThiOS00N2FmLTlkMTYtZjRhZDI0ZjcyMmUyIn0.BqW_65HCfzdRTS8YMBqRXDk1fEhHduzbY1W07NMPqbg",
      <br>
      "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMTMwNjY5LCJqdGkiOiJhYTlmZTcyZThhMTA0MWNiOTdlYzQ1MzhmY2E5MDcwZCIsInVzZXJfaWQiOiIzNzZhYThmMC1hOGI5LTQ3YWYtOWQxNi1mNGFkMjRmNzIyZTIifQ.BDNSKxwMG0FVYX0bupN45QikAt25QxMnFppFEfPAjow"<br>
      }
      </b></code></li>
   </li>
    </ol>
  </li>
  </h3>
  <br>
  <h3>
  <li>Requisitar Reset de Senha: </li>
    <ol>
      <li>Requisição: <b>POST</b></li>
      <li>Endpoint: <b>localhost:8000/api/v1/auth/users/reset_password/</b></li>
      <li>JSON BODY: <b><code>{<br>
      "email": "teste1@gmail.com",<br>
   }</code></b>
   </li>
    </ol>
  </li>
  </h3>
  <br>
  <h3>
  <li>Confirmar Reset de Senha: </li>
    <ol>
      <li>Requisição: <b>POST</b></li>
      <li>Endpoint: <b>localhost:8000/api/v1/auth/users/reset_password_confirm/</b></li>
      <li>JSON BODY: <b><code>{<br>
      "new_password": "pass123@",<br>
      "re_new_password": "pass123@",<br>
      "uid": "Mw",<br>
      "token": "bfvs38-9ed501f77c012e513d20d7a351d7b181"<br>
   }</code></b>
   </li>
    </ol>
  </li>
  </h3>
  <br>         
</ol>

