<template>
  <div class="h-fit min-h-full bg-gray-100 dark:bg-gray-800">
    <div id="oxox" class="columns-xs gap-4 p-5">
      <h1 class="mt-3 text-4xl font-bold">Kotlin Cheatsheet</h1>
      <BlockCheatsheet
        v-for="(item, i) in KOTLIN_CHEATSHEET"
        :key="i"
        class="[&:not(:first-child)]:mt-4"
        :title="item.title"
        :cheatsheets="item.cheatsheets"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import '~/assets/global.scss'
import type { PropsBlockCheatsheet } from '~/components/types'

const KOTLIN_CHEATSHEET: PropsBlockCheatsheet[] = [
  {
    title: 'Basic syntax',
    cheatsheets: [
      {
        label: 'Package definition and imports',
        lang: 'kotlin',
        code: `package my.demo
import kotlin.text.*`
      },
      {
        label: 'Program entry point',
        lang: 'kotlin',
        code: `fun main() {
    // ...
}`
      },
      {
        label: 'Print to the standard output',
        lang: 'kotlin',
        code: `println("Hello world!")`
      },
      {
        label: 'Functions',
        lang: 'kotlin',
        code: `fun sum(a: Int, b: Int): Int {
    return a + b
}
fun sum(a: Int, b: Int) = a + b`
      },
      {
        label: 'Variables',
        lang: 'kotlin',
        code: `val a: Int = 1  // immutable
var b = 2       // mutable`
      },
      {
        label: 'Creating classes and instances',
        lang: 'kotlin',
        code: `class Rectangle(val height: Double, val length: Double) {
    val perimeter = (height + length) * 2
}`
      },
      {
        label: 'Comments',
        lang: 'kotlin',
        code:
          '// This is an end-of-line comment\n' +
          '/* This is a block comment\n' +
          '   on multiple lines. */'
      },
      {
        label: 'String templates',
        lang: 'kotlin',
        code: `val a = 1
val s1 = "a is $a"            // simple name in template:
val s2 = "$a + 1 = \${a + 1}"  // arbitrary expression in template:`
      },
      {
        label: 'Conditional expressions',
        lang: 'kotlin',
        code: `fun maxOf(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}
fun maxOf(a: Int, b: Int) = if (a > b) a else b`
      },
      {
        label: 'for loop',
        lang: 'kotlin',
        code: `val items = listOf("apple", "banana", "kiwifruit")
for (item in items) {
    println(item)
}
for (index in items.indices) {
    println("item at $index is \${items[index]}")
}`
      },
      {
        label: 'while loop',
        lang: 'kotlin',
        code: `val items = listOf("apple", "banana", "kiwifruit")
var index = 0
while (index < items.size) {
    println("item at $index is \${items[index]}")
    index++
}`
      },
      {
        label: 'when expression',
        lang: 'kotlin',
        code: `fun describe(obj: Any): String =
    when (obj) {
        1          -> "One"
        "Hello"    -> "Greeting"
        is Long    -> "Long"
        !is String -> "Not a string"
        else       -> "Unknown"
    }`
      },
      {
        label: 'Ranges',
        lang: 'kotlin',
        code: `for (x in 1..5) {
    print(x)
}
for (x in 9 downTo 0 step 3) {
    print(x)
}`
      },
      {
        label: 'Collections',
        lang: 'kotlin',
        code: `val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
fruits
    .filter { it.startsWith("a") }
    .sortedBy { it }
    .map { it.uppercase() }
    .forEach { println(it) }`
      },
      {
        label: 'Nullable values and null checks',
        lang: 'kotlin',
        code: `fun parseInt(str: String): Int? {
    // ...
}
fun printProduct(arg1: String, arg2: String) {
    val x = parseInt(arg1)
    val y = parseInt(arg2)

    // Using \`x * y\` yields error because they may hold nulls.
    if (x != null && y != null) {
        // x and y are automatically cast to non-nullable after null check
        println(x * y)
    }
    else {
        println("'$arg1' or '$arg2' is not a number")
    }
}`
      },
      {
        label: 'Type checks and automatic casts',
        lang: 'kotlin',
        code: `fun getStringLength(obj: Any): Int? {
    if (obj is String) {
        // \`obj\` is automatically cast to \`String\` in this branch
        return obj.length
    }

    // \`obj\` is still of type \`Any\` outside of the type-checked branch
    return null
}`
      }
    ]
  }
]

//  <div id="wrapper" class="flex h-full items-center justify-center">
// <div class="m-auto w-[400px] px-10 py-20">
//     <BlockCheatsheet />
//     <ExampleNuxtUi />
//     <ExampleTailwind />
//     <ExampleEnv />
//     <ExamplePinia />
//     <ExampleVeelidate />
//     <ExampleVueQueryQuery />
//     <ExampleVueQueryMutation />
//     <ExampleVueTable />
//     <ExampleNuxtImage />
//     <ExampleNuxtIcon />
//     <ExampleSwiper />
//     <ExampleNuxtI18n />
//     <ExampleNuxtFont />
//     <ExampleVueUse />
//     <ExampleVueUseMotion />
//     </div>
//     </div>
</script>

<style scoped>
#oxox > * {
  break-inside: avoid;
}
</style>
