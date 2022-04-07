import toNumber from 'lodash/toNumber';
import styled from 'styled-components';
import React, { useMemo, useState } from 'react';
import FormInput from '../../molecules/FormInput/FormInput';
import Ans from '../../molecules/Ans/Ans';

const Container = styled.div`
  padding: 8px 16px;
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

        return (ImaxNumber - IminNumber) / (ImaxNumber + IminNumber)
      }

      return undefined;
    },
    [Imin, Imax],
  );

  return (
    <Container>
      <FormInput
        label="iMin"
        value={Imin}
        onChange={setImin}
      />
      <FormInput
        label="iMax"
        value={Imax}
        onChange={setImax}
      />
      <Ans value={value} addToast={addToast}/>
    </Container>
  );
}

export default Math;
