import * as S from './styles'
import React from 'react'

export type MainProps = {
  title?: string
  description?: string
  img?: string
  sizeCard?: 'sm' | 'lg'
  sizeText?: 'sm' | 'lg'
}

const Card = ({
  title,
  description,
  img,
  sizeCard = 'lg',
  sizeText = 'sm'
}: MainProps) => (
  <S.Wrapper sizeCard={sizeCard}>
    <S.Illustration src={img} alt="img dos cards" />
    <S.Title sizeText={sizeText}>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Card
