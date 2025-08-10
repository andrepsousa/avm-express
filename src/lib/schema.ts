import { z } from 'zod';

export const budgetSchema = z.object({
  nome: z.string().min(1, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  descricao: z.string().min(1, 'Descreva sua necessidade'),
});

export type BudgetForm = z.infer<typeof budgetSchema>;
