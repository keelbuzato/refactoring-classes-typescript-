import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FoodTypes } from '../../pages/Dashboard/dashboard.types';
import { FormHandles } from '@unform/core';
import { useRef } from 'react';

interface ModalFoodProps {
  setIsOpen(): void;
  isOpen: boolean;
  handleAddFood(food: FoodTypes): void;
}
function ModalAddFood({ setIsOpen, isOpen, handleAddFood }: ModalFoodProps) {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = async (data: FoodTypes) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
