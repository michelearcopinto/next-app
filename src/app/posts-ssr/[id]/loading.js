// posts/[id]/loading.js
"use client";
import { useParams } from "next/navigation";
export default function Loading() {
  const { id } = useParams();
  return <div>Caricamento post {id}...</div>;
}
