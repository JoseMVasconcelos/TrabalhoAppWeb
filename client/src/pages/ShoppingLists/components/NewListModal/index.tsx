import styles from './NewListModal.module.css'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'

import { CustomInput } from '../../../../components/CustomInput'
import { CustomButton } from '../../../../components/CustomButton'

export function NewListModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CustomButton fullWidth={false}>criar nova lista</CustomButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay}>
          <Dialog.Content className={styles.dialogContent}>
            <Dialog.Title className={styles.dialogTitle}>
              Crie uma nova lista de compras
            </Dialog.Title>
            <Dialog.Close className={styles.closeButton}>
              <X size={24} />
            </Dialog.Close>
            <Dialog.Description className={styles.dialogDescription}>
              Adicione um nome e descrição para criar a sua nova lista.
            </Dialog.Description>
            <form>
              <CustomInput inputType="text" placeholder="Nome" isRequired />
              <CustomInput
                inputType="text"
                placeholder="Descrição"
                isRequired
              />
              <CustomButton fullWidth>criar lista</CustomButton>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
