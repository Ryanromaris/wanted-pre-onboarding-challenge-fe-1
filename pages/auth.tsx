import {
  Center,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  InputLeftElement,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import test from 'node:test';
import { useState } from 'react';

const Login = () => {
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const passwordRegex = /^[A-Za-z0-9]{8}$/;

  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = !emailRegex.test(input);

  const [input2, setInput2] = useState('');

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput2(e.target.value);

  const isError2 = !passwordRegex.test(input);

  return (
    <>
      <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Card width='50vh' p={10} m={10}>
          <CardHeader>
            <Heading size='md'>로그인</Heading>
          </CardHeader>
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents='none' />
              <Input type='email' placeholder='Email' />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children=''
              />
              <Input type='password' placeholder='Password' />
            </InputGroup>
            <Button onClick={() => {}}>로그인하기!</Button>
          </Stack>
        </Card>
        <Card width='50vh' p={10} m={10}>
          <CardHeader>
            <Heading size='md'>회원가입</Heading>
          </CardHeader>

          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input type='email' value={input} onChange={handleInputChange} />
            {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={isError2}>
            <FormLabel>Password</FormLabel>
            <Input
              type='password'
              value={input2}
              onChange={handleInputChange2}
            />
            {isError2 && (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>

          <Button onClick={() => {}}>회원가입 하기!</Button>
        </Card>
      </Flex>
    </>
  );
};
export default Login;
