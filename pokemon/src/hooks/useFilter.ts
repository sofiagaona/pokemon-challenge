import { useState, useEffect } from "react";
import { useAppSelector } from "../store/store";
import { selectAllGender } from "../store/slice/gender-all-slice";

export default function useFilter() {
  const { data, error } = useAppSelector(selectAllGender);
  const dataFilter = data;
  return dataFilter;
}
