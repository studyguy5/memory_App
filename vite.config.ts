import { defineConfig } from 'vite';

export default defineConfig({
  base: "/project/"
});

// Zusatz:=============================================================
// nach dem schließenden slash sollte die index des Projects kommen
// das ist eine hilfe wenn man die Index des Project nicht auf root Ebene legt
// sondern eine oder zwei Ebenen Tiefer