import styled, { css } from 'styled-components'

const Cards = {
  sm: css`
    width: 209px;
    height: 318px;
    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: center;
    img {
      width: min(30rem, 100%);
    }
  `,

  lg: css`
    max-width: 750px;
    height: 180px;
    padding-right: 10px;
    display: grid;
    gap: 30px;
    grid-template-areas:
      'size  size-1'
      'size  size-2';
    img {
      height: 180px;
    }
  `
}
type CardProps = {
  sizeCard: 'sm' | 'lg'
}

const TextCards = {
  sm: css`
    font-size: 1.8rem;
    height: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    padding-left: 20px;
  `,
  lg: css`
    font-size: 1.4rem;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-right: 30px;
    padding-left: 20px;
  `
}

type textProps = {
  sizeText: 'sm' | 'lg'
}
export const Wrapper = styled.main<CardProps>`
  ${({ sizeCard }) => css`
    ${Cards[sizeCard]}
  `}

  align-items: center;
  background: #1e293b;
  border-radius: 10px;
`

export const Title = styled.h1<textProps>`
  ${({ sizeText }) => css`
    ${TextCards[sizeText]}
  `}
`

export const Description = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`

export const Illustration = styled.img`
  grid-area: size;
`
