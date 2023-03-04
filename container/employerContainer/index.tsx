import React from 'react';

import UserContainer from './userContainer';
import CompanyContainer from './companyContainer';

export default function EmployerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserContainer>
        <CompanyContainer>{children}</CompanyContainer>
      </UserContainer>
    </>
  );
}
