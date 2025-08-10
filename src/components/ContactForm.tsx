import { Button } from './ui/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { budgetSchema } from '../lib/schema';
import type { BudgetForm } from '../lib/schema';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BudgetForm>({
    resolver: zodResolver(budgetSchema),
  });

  const onSubmit = (data: BudgetForm) => {
    // Integração com API seria aqui
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1">Nome</label>
        <input {...register('nome')} className="w-full p-2 text-primary" />
        {errors.nome && <p className="text-red-400 text-sm">{errors.nome.message}</p>}
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input {...register('email')} className="w-full p-2 text-primary" />
        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block mb-1">Descrição</label>
        <textarea {...register('descricao')} className="w-full p-2 text-primary" />
        {errors.descricao && <p className="text-red-400 text-sm">{errors.descricao.message}</p>}
      </div>
      <Button type='submit'>Enviar</Button>
    </form>
  );
};

export default ContactForm;
