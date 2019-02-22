import React from 'react';
import styled from 'styled-components';

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 100%;
    margin: auto;
    width: 300px;
  }
`;

export const CommentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  img {
    height: 50px;
    width: 50px;
  }
`;
