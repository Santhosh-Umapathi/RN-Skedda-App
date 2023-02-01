import { useMemo } from "react";

const bottomSheetController = () => {
  const snapPoints = useMemo(() => ["25%"], []);

  return { snapPoints };
};

export default bottomSheetController;
