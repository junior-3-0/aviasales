import { ConfigProvider, Flex, Spin } from 'antd'

function SpinerLoader() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2196f3',
        },
      }}
    >
      <Flex align="center" gap="middle" style={{ margin: '0 auto' }}>
        <Spin size="small" />
      </Flex>
    </ConfigProvider>
  )
}

export default SpinerLoader
