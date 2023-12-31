import { Button, Flex } from "@mantine/core";
import { Fragment, useEffect, useState } from "react";
import { uid } from "uid";
import Stage from "../Stage/Stage";
import { IconPencilPlus } from "@tabler/icons-react";

export default function StagesField({ savedData }) {
  const [stages, setStages] = useState([]);

  function addStage() {
    setStages([
      ...stages,
      { stageName: "", stageDate: new Date(), uid: uid() },
    ]);
  }

  useEffect(() => {
    if (savedData && savedData.stages) {
      const newStages = savedData.stages.map((stage) => ({
        ...stage,
        uid: uid(),
      }));
      setStages(newStages);
    }
  }, [savedData]);

  function deleteStage(uid) {
    const filterByUid = stages.filter((stage) => stage.uid !== uid);
    setStages(filterByUid);
  }

  return (
    <>
      {stages
        ? stages.map((stage, index) => {
            return (
              <Fragment key={stage.uid}>
                <Stage
                  count={index + 1}
                  onDeleteStage={deleteStage}
                  uid={stage.uid}
                  stageName={stage.stageName}
                  stageDate={stage.stageDate}
                />
              </Fragment>
            );
          })
        : null}
      <Flex>
        <Button variant="filled" size="sm" onClick={addStage} mt="12px">
          <IconPencilPlus style={{ marginRight: "10px" }} />
          Add Stage
        </Button>
      </Flex>
    </>
  );
}
