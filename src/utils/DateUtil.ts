import { ptBR } from 'date-fns/locale';
import {format } from 'date-fns';

export function formatDateShort(value: Date) {
    return format(value, 'P', {locale: ptBR})
}