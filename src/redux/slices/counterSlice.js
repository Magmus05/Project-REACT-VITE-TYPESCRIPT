import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    increment: (state, action) => {
      state.count += 1;
			console.log(action.payload);
    },
    decrement: (state) => {
      state.count -= 1;
    },
		multiplication: (state) => {
      state.count *= 5;
    },
    // Пример с данными
    incrementByAmount: (state, action) => {
      state.count += action.payload;
			
    },
  },
});
// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment, decrement, incrementByAmount, multiplication } = counterSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default counterSlice.reducer;