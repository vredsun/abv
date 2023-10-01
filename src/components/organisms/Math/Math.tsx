import toNumber from 'lodash/toNumber';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Formula from '../../atoms/Formula/Formula';
import Ans from '../../molecules/Ans/Ans';
import FormInput from '../../molecules/FormInput/FormInput';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 16px;
    margin-bottom: ${8 * 16}px;
`;

type PropsT = {
    addToast: (text: string) => void;
}

const Math: React.FC<PropsT> = ({ addToast }) => {
  const [Imin, setImin] = useState<string>('');
  const [Imax, setImax] = useState<string>('');

  const value = useMemo(
    () => {
      if (Imin && Imax) {
        const IminNumber = toNumber(Imin);
        const ImaxNumber = toNumber(Imax);

        return Number(((ImaxNumber - IminNumber) / (ImaxNumber + IminNumber)).toFixed(3))
      }

      return undefined;
    },
    [Imin, Imax],
  );

  return (
    <Container>
      <Formula>(max - min) / (max + min)</Formula>
      <FormInput
        label="max"
        value={Imax}
        onChange={setImax}
      />
      <FormInput
        label="min"
        value={Imin}
        onChange={setImin}
      />
      <Ans value={value} addToast={addToast}/>
    </Container>
  );
}

export default Math;
