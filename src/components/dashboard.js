import React from 'react';
import { useState } from 'react';
import { UserData} from './data';
import LineChart from './lineChart';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react';

  function Dashboard() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [{
        label: "Wellness Score",
        data: UserData.map((data) => data.userGain),
      }],
    });
    const size = 'xl';

    return (
      <>
        <Button onClick={onOpen}>Dashboard</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} size={size}>
          <ModalOverlay />
          <ModalContent maxW="43.5rem">
            <ModalHeader>How you've been feeling</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            </ModalBody>
            <div style = {{width:700, padding: 25}}><LineChart chartData={userData}/></div>
            
            <ModalFooter>
              <Button colorScheme='teal' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Dashboard;