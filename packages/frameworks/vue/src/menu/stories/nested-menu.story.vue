<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from '../'
import './menu.css'

const value = ref({
  framework: '',
  libraries: [],
})
</script>

<template>
  <Story title="Menu / Nested">
    <Variant title="Basic">
      <Menu.Root>
        <Menu.Trigger>Open menu</Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item id="new-tab">New Tab...</Menu.Item>
            <Menu.Item id="new-win">New Window...</Menu.Item>
            <Menu.Separator />
            <Menu.Root>
              <Menu.TriggerItem>Share &gt;</Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item id="twitter">Twitter</Menu.Item>
                  <Menu.Item id="message">Message</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Variant>

    <Variant title="Advanced">
      <Menu.Root v-model="value">
        <Menu.Trigger>Open menu</Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup id="radio-group">
              <Menu.ItemGroupLabel htmlFor="radio-group">Radio Group</Menu.ItemGroupLabel>
              <Menu.OptionItem name="framework" type="radio" value="react" v-slot="{ isChecked }">
                {{ isChecked ? '✅' : '' }} React
              </Menu.OptionItem>
              <Menu.OptionItem name="framework" type="radio" value="solid" v-slot="{ isChecked }">
                {{ isChecked ? '✅' : '' }} Solid
              </Menu.OptionItem>
              <Menu.OptionItem name="framework" type="radio" value="vue" v-slot="{ isChecked }">
                {{ isChecked ? '✅' : '' }} Solid
              </Menu.OptionItem>
            </Menu.ItemGroup>
            <Menu.Root>
              <Menu.TriggerItem>Share &gt;</Menu.TriggerItem>
              <Menu.Positioner>
                <Menu.Content>
                  <Menu.Item id="twitter">Twitter</Menu.Item>
                  <Menu.Item id="message">Message</Menu.Item>
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Variant>
  </Story>
</template>
