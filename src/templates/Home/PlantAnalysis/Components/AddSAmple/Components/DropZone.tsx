import { Group } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useRef } from 'react';
import { BiImageAdd } from "react-icons/bi";

export default ({ sampleData, setSampleData }: { sampleData: any, setSampleData: Function }) => {
  const openRef = useRef<() => void>(null);
  return (
    <Dropzone
      onDrop={(files) => { setSampleData({ ...sampleData, image: files[0] }) }}
      onReject={(files) => { setSampleData({ ...sampleData, image: files[0] })}}
      openRef={openRef}
      className='flex justify-center items-center'
    >
      <Group position="center" spacing="xl" style={{ minHeight: 100, pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <BiImageAdd
            size={50}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <BiImageAdd
            size={50}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <BiImageAdd size={50} />
        </Dropzone.Idle>

        <div>
          <div>
            Drag images here or click to select files
          </div>
          <div>
            Attach as many files as you like, each file should not exceed 5mb
          </div>
        </div>
      </Group>
    </Dropzone>
  )
}