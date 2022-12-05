import {Button, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Title from '../components/Title'

const HomePage = () => {
  return (
    <>
    <Title title="Bem Vindo!"/>
      <header className='masthead main-bg-image'>
        <Container className='px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center'>
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase">
                Moderna Houses
              </h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Vendendo, alugando ou comprando sua casa dos sonhos!
              </h2>
              <LinkContainer to='/properties'>
                <Button variant='primary'>Venha conhecer!</Button>
              </LinkContainer>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}

export default HomePage